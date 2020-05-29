import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import Form from 'react-bootstrap/Form'


export const Element = ({ id, text, setText, index, moveCard }) => {
  const [focus, setFocus] = useState(false);
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: 'Element',
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Screen Size
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  
  return (
    <Form.Control
      ref={ref}
      style={{ opacity }}
      readOnly={focus}
      onBlur={setFocus(false)} 
      onFocus={setFocus(true)} 
      value={text}
      onChange={setText} />

  )
}
