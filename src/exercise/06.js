import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef()
  const [error, setError] = React.useState(null)
  function handleSubmit(event) {
    event.preventDefault()
    // var text = event.target.elements[0].value
    var text = usernameRef.current.value
    onSubmitUsername(text)
  }

  function handleChange(event) {
    var text = event.target.value

    const isValid = text === text.toLowerCase()
    if (!isValid) {
      setError('Username must be in lowercase!')
    } else {
      setError(null)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={usernameRef}
          onChange={handleChange}
        />
        <div role="alert">{error ? error : ''}</div>
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
