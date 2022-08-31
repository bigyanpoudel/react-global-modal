import React from 'react'
import { GlobalModal } from 'react-global-modal'

const Example = () => {
  const openModal = async () => {
    GlobalModal.push({
      component: ComponentText,
      props: {
        test: 'Testing',
      },
    })
  }

  return (
    <div>
      <button onClick={openModal}>Open</button>
    </div>
  )
}
const ComponentText = ({ test }: { test: string }) => {
  return (
    <div
      style={{
        height: '400px',
      }}
    >
      <div
        style={{
          height: '2rem',
        }}
      >
        Header
      </div>
      hello {test}
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid rgb(230 232 240)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '8px 10px',
            justifyContent: 'flex-end',
            gridGap: '5px',
          }}
        >
          <button className="btn btn-error">Close</button>
          <button className="btn btn-primary"> okay</button>
        </div>
      </div>
    </div>
  )
}
export default Example
