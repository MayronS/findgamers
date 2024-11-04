import React from 'react'

function User({ profilePhoto, name = "Usuário", content = "mensagem" }) {
  return (
    <div>
      <div className="flex items-center gap-2 w-96 bg-primary/200 rounded-3xl mb-4">
        <img src={profilePhoto} alt="" />
        <div>
          <h3>{name}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default User
