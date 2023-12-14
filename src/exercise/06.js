import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    // var text = event.target.elements[0].value
    var text = usernameRef.current.value
    onSubmitUsername(text)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={usernameRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
