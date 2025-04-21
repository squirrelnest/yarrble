import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

export const LoginContainer = () => {

  let handleSubmit = () => {
    console.log('trying to log in')
  }

  return (
    <div className="row" style={{ height: (window.innerHeight * 0.9) }}>
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
  
}
