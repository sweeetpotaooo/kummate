import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './stories/Button'; // Button 컴포넌트를 가져옵니다.

export default function App() {
  return (
    <div>
      {/* Button 컴포넌트를 사용합니다. */}
      <Button label='button'/>
    </div>
  );
}
