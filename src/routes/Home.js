
import Navigation from '../components/Navigation';
import Friends from '../components/Friends';
import Aside from '../components/Aside';
import Feed from '../components/Feed';


function Home(){
  return (
    <div className="App">
      <Navigation />
      <div className='margin-value'>
        <div>
          <Friends />
          <Feed />
          <Feed />
          <Feed />
        </div>
        <Aside />
      </div>
    </div>
  );
}

export default Home;