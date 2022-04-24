import Cards from './Cards.js';
import MessageBox from './MessageBox.js';
import array from './data.json';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function App() {

  const [data, setData] = useState(array);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(data);
    const [temp] = items.splice(result.source.index,1);
    temp.status = result.destination.droppableId.toString();
    console.log(result.destination.index)
    if(result.destination.index > result.source.index) {
      items.splice(result.destination.index - 1, 0, temp);
    }else {
      items.splice(result.destination.index, 0, temp);
    }
    setData(items);
    console.log(result)
    console.log(data)
  }

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", backgroundColor: "#2C2932", boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: "30px", height: '15vh', boxSizing: 'border-box' }}>
          <div>
            <div style={{ fontSize: "18px", border: "1px solid white", borderRadius: "6px", padding: "4px 18px", color: "#FFFFFF", cursor: "pointer" }}> Trash </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }} >
            <div style={{ fontSize: "18px", border: "1px solid pink", marginRight: "20px", borderRadius: "50%", color: "pink", cursor: "pointer", width: "40px", height: "40px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>5</div>
            <div style={{ fontSize: "18px", border: "1px solid yellow", borderRadius: "6px", padding: "0px 18px", color: "yellow", cursor: "pointer", display: 'flex', justifyContent: "center", alignItems: 'center' }}>Irrelevant</div>
          </div>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div style={{ width: "100vw", height: '85vh' }}>
            <div style={{ width: '95%', margin: 'auto', height: "100%", display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <Droppable droppableId="0">
                {(provided) => (
                  <div  {...provided.droppableProps} ref={provided.innerRef} style={{ width: "24%", height: '90%', backgroundColor: '#24212B', borderRadius: '4px' }}>
                    <Cards key={0} heading="New Conversation" card={
                      data.map((item, index) => {
                        if (item.status == 0) {
                          return (
                            <Draggable index={index} draggableId={item.id}>
                              {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <MessageBox name={item.name} message={item.message}></MessageBox>
                                </div>

                              )}
                            </Draggable>
                          )
                        }
                      })
                    }></Cards>
                    {provided.placeholder}
                  </div>)}
              </Droppable>


              <Droppable droppableId="1">
                {(provided) => (
                  <div key={1} {...provided.droppableProps} ref={provided.innerRef} style={{ width: "24%", height: '90%', backgroundColor: '#24212B', borderRadius: '4px' }}>

                    <Cards key={1}  heading="stage 1" card={
                      data.map((item, index) => {
                        if (item.status == 1) {
                          return (
                            <Draggable index={index} draggableId={item.id}>
                              {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <MessageBox name={item.name} message={item.message}></MessageBox>
                                </div>

                              )}

                            </Draggable>
                          )
                        }
                      })
                    }></Cards>

                    {provided.placeholder}
                  </div>)}
              </Droppable>


              <Droppable droppableId="2">
                {(provided) => (
                  <div  {...provided.droppableProps} ref={provided.innerRef} style={{ width: "24%", height: '90%', backgroundColor: '#24212B', borderRadius: '4px' }}>


                    <Cards key={2} heading="stage 2" card={
                      data.map((item, index) => {
                        if (item.status == 2) {
                          return (
                            <Draggable index={index} draggableId={item.id}>
                              {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <MessageBox name={item.name} message={item.message}></MessageBox>
                                </div>

                              )}

                            </Draggable>
                          )
                        }
                      })
                    }></Cards>
                    {provided.placeholder}
                  </div>)}
              </Droppable>



              <Droppable droppableId="3">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} style={{ width: "24%", height: '90%', backgroundColor: '#24212B', borderRadius: '4px' }}>
                    <Cards  key={3}  heading="stage 3" card={
                      data.map((item, index) => {
                        if (item.status == 3) {
                          return (
                            <Draggable index={index} draggableId={item.id}>
                              {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <MessageBox name={item.name} message={item.message}></MessageBox>
                                </div>
                              )}
                            </Draggable>
                          )
                        }
                      })
                    }></Cards>

                    {provided.placeholder}
                  </div>)}
              </Droppable>
            </div>
          </div>
        </DragDropContext>
      </div>
    </>
  )
}

export default App;


