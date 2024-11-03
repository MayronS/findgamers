import React from 'react'

function User({ profilePhoto }) {
  return (
    <div>
      <div className="flex items-center gap-2 w-96 bg-primary/200 rounded-3xl mb-4">
        <img src={profilePhoto} alt="" />
        <div>
          <h3>Usuário</h3>
          <p>mensagem</p>
        </div>
      </div>
    </div>
  )
}

export default User
