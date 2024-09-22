function onDragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");

  const draggableElement = document.getElementById(id);

  const dropzone = event.target;

  if (dropzone.classList.contains("example-draggable")) {
    const referenceElement = dropzone;
    referenceElement.parentNode.insertBefore(draggableElement, referenceElement);
  } else if (dropzone.classList.contains("dropzone")) {
    dropzone.appendChild(draggableElement);
  }

  event.dataTransfer.clearData();
}
