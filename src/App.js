import './App.css'

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

const Container = (props) =>
{
  return (
    <div className='container'>
      <a href={`https://www.youtube.com/results?search_query=${props.title}`}>
      <img
        src={`https://picsum.photos/600/150?random=${props.index}`}
        alt={`랜덤 이미지 ${props.index}`}/>
      <div className='song-title'>{props.title}</div>
      </a>
    </div>
  )
}

export default App
