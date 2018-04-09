import VNode from '../vnode/index';
import patchType from '../diff/patch-type.js';
export default patch;


const { REPLACE, REORDER, PROPS, TEXT } = patchType;

function patch(domRoot, patches) {
  walk(domRoot, patches, { index: 0 });
}

function walk(domNode, patches, walker) {
  const currPatches = patches[walker.index];

  if (domNode.childNodes) {
    childNodes.forEach((child, i) => {
      walker.index++;
      walk(child, patches, walker);
    });
  }

  if(currPatches) {
    applyPatches(domNode, currPatches);
  }
}

/**
 * patch a single dom node.
 * @param {NodeList} domNode 
 * @param {Array} patch 
 */
function applyPatches(domNode, patches) {
  let props;

  patches.forEach(patch => {
    switch(patch.type) {
    case REPLACE:
      newNode = (patch.node instanceof VNode || patch.node.render)
        ? patch.node.render() // an instance of VNode or a custom node.
        : typeof patch.node === 'string'
        ? document.createTextNode(patch.node)
        : new Error('You might be using a custom node, if so, you need to provide a render function.');
      if (newNode instanceof Error) {
        throw newNode;
      }
      break;

    case PROPS:
      props = patch.props;
      for (const propName in props) {
        if (props[propName] === void 0)
          domNode.removeAttribute(propName);
        else
          domNode.setAttribute(propName, props[propName]);
      }
      break;

    case TEXT:
      if (domNode.textContent) {
        domNode.textContent = patch.text;
      } else {
        domNode.nodeValue = patch.text;
      }
      break;
    
    case REORDER:
      reorderChildren(domNode, patch.moves);
      break;

    default:
      throw new Error('Some internal error.');
    }
  });
}

// TODO: Add batch.
function reorderChildren(domNode, moves) {
  const childNodes = Array.prototype.slice.call(domNode.childNodes);
  let node;

  moves.forEach(move => {
  switch(move.type) {
  case 'INSERT':
    try {
      node = move.item.render();
      childNodes.splice(move.index, 0, node);
    } catch (e) {
      console.log('A custom-defined node should have a render method, otherwise it must be stateless.');
    }
    break;

  case 'REMOVE':
    childNodes.splice(move.index, 1);
    break;

  case 'MOVE':
    node = childNodes.splice(move.from, 1)[0];
    childNodes.splice(move.to, 0, node);
    break;
  }
  })
}