import './App.css'
import Container from './Container.js'

const App = () =>
{
  return (
    <div>
      <Header/>
      <Playlist/>
      <Container title="넌 나의 전부" index='1'/>
      <Container title="이별하러가는 길" index='2'/>
      <Container title="너라는 세상" index='3'/>
    </div>
  )
}

const Header = () =>
{
  return (
    <h1>React Programing</h1>
  )
}

const Playlist = () =>
{
  return (
    <div className='playlist'>
      프로그래밍하면서 듣고싶은 노래
    </div>
  )
}

export default App