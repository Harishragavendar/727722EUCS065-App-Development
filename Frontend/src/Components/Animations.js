// src/Components/Animations.js
import React, { useState } from 'react';
import './Animation.css';


const Animations = () => {
  const storiesData = {
    '3-5': [
        { id: 2, title: 'THE FOX AND THE CROW', videoUrl: "https://www.dropbox.com/scl/fi/1lixxvqnwp6kbu3v36ylr/TheFoxAndTheCrow.mp4?rlkey=ctopi00dggf8m45ro6c9qpo8w&st=qtxp15rw&raw=1" },
        { id: 3, title: 'THE OAK TREE', videoUrl: "https://www.dropbox.com/scl/fi/r2h2ocad7es8bzff5376d/TheOakTree.mp4?rlkey=t4ra9mtkqlq4lt1vcql338amz&st=v3p3gyow&raw=1" },
        { id: 4, title: 'THE WIND AND THE SUN', videoUrl: "https://www.dropbox.com/scl/fi/fmlkys2nri8sggon69fjm/TheWindAndTheSun.mp4?rlkey=nrk2gnjb2x6yw6djr7erwmed7&st=1nltjclk&raw=1" },
        { id: 5, title: 'THE CITY MOUSE AND THE COUNTRY MOUSE', videoUrl: "https://www.dropbox.com/scl/fi/t6j7rntol0zmjkkxp6f13/thecitymouseandthecountrymouse.mp4?rlkey=0aeazd15qujumzecpb451yojm&st=wjvhybhi&raw=1" },
        { id: 6, title: 'THE DOG AND HIS BONE', videoUrl: "https://www.dropbox.com/scl/fi/z59b67ku7a4y8k6o82nzl/thedogandhisbone.mp4?rlkey=ek987qvsjybgbaoutv3vavh9e&st=kosb1kcn&raw=1" },
        { id: 1, title: 'THE EMPEROR\'S NEW CLOTHES', videoUrl: "https://www.dropbox.com/scl/fi/pqd0ixhlisj829poknxh7/theemperornewclothes.mp4?rlkey=n170ev6tbqpyg4v01vzz0f83c&st=l7e2bbff&raw=1" }
    ],
    '6-7': [
      { id: 7, title: 'THE FRIGHTENED LION', videoUrl: "https://www.dropbox.com/scl/fi/cne4djrm7qui41ado47mx/thefrightenedlion.mp4?rlkey=ir6yv36j5ll1btxxylsrrxkzr&st=h2fck43a&raw=1" },
      { id: 8, title: 'THE GIRL AND THE ICE CREAM TRUCK', videoUrl: "https://www.dropbox.com/scl/fi/l7cvl68fak74m3n4fa767/thegirlandtheicecreamtruck.mp4?rlkey=rlbv9ahlk4ilzvkdlbo64edhe&st=en6881nd&raw=1" },
      { id: 9, title: 'CHICKENLITTLE', videoUrl: "https://www.dropbox.com/scl/fi/gbvx0p058huabeyihzdp9/chickenlittle.mp4?rlkey=259xjw67688r3t3wruaitu9qi&st=jux4f554&raw=1" },
      { id: 10, title: 'THE BIRD AND THE WHALE', videoUrl: "https://www.dropbox.com/scl/fi/37qh861i02op2kcut10uj/thebirdandthewale.mp4?rlkey=krh06u8xq8ybo4fuvqy2nb8bc&st=nn91tsjk&raw=1" },
      { id: 11, title: 'THE BREAD', videoUrl: "https://www.dropbox.com/scl/fi/8a3ecekxqe2b5y3hx5xsx/thebread.mp4?rlkey=9ojhymhp4dfsawv4rxjtndqqj&st=mbiv0gjk&raw=1" },
      { id: 12, title: 'THE LITTLE RED HEN', videoUrl: "https://www.dropbox.com/scl/fi/5nuy8coj5s7l8caciilyh/thelittleredhen.mp4?rlkey=epg9kyhw329xrb4c6orfmkcrc&st=eq4k8xic&raw=1" },
    ],
    '8-10': [
      { id: 13, title: 'SNOW WHITE', videoUrl: "https://www.dropbox.com/scl/fi/9zxqcxhjrvh7l2k02zy6x/snowwhite.mp4?rlkey=tx10pjobjkadasc632l4910iv&st=qqynqprc&raw=1" },
      { id: 14, title: 'RAPUNZEL', videoUrl: "https://www.dropbox.com/scl/fi/lwj24f3h64jpkx1naw3pt/rapunzel.mp4?rlkey=huewy7iyrmabjp8k2672ekavp&st=eul7c3gl&raw=1" },
      { id: 15, title: 'THE UGLY OLD DUCKLING', videoUrl: "https://www.dropbox.com/scl/fi/11bn2hv4r6pzmotvzu1qu/theuglyduckling.mp4?rlkey=1f6zwftlhs5blxlyq78vdekxu&st=6vti204j&raw=1" },
      { id: 16, title: 'THE BEAUTY AND THE BEAST', videoUrl: "https://www.dropbox.com/scl/fi/m1w3em981jro37ln2sbt0/thebeautyandthebeast.mp4?rlkey=43jgxdm49xir2wfl9yrke0gok&st=oaden0vy&raw=1",},
      { id: 17, title: 'THE NICE OLD WITCH', videoUrl: "https://www.dropbox.com/scl/fi/c3auykgmqfi1t2c6c0244/theniceoldwitch.mp4?rlkey=9ltyla4eq689gaav1g7k5asqz&st=x61cim2d&raw=1" },
      { id: 18, title: 'LITTLE RED RIDING HOOD', videoUrl: "https://www.dropbox.com/scl/fi/1f5l84b0rvj9tfzu9s8ij/littleredridinghood.mp4?rlkey=4n7o2kxmpwkm7pd53rdzp7hjw&st=2tt1e66u&raw=1" },
    ]
  };


  const [ageGroup, setAgeGroup] = useState('3-5');
  const [stories, setStories] = useState(storiesData['3-5']);

  const handleAge = (group) => {
    setAgeGroup(group);
    setStories(storiesData[group]);
  }

  return (
    <div className="main-layout12">
      <div id="topic12">
        <h1 className='namehead12'>ANIMATIVE STORY BOOKS</h1>
      </div>
      <div className="age-buttons12">
        <button onClick={() => handleAge('3-5')}>Age 3-5</button>
        <button onClick={() => handleAge('6-7')}>Age 6-7</button>
        <button onClick={() => handleAge('8-10')}>Age 8-10</button>
      </div>
      <div className="content12">
        <div className="container-row12">
          {stories.map(story => (
            <div key={story.id} className="container12">
              <video width="640" height="360" controls>
                <source src={story.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="name12">{story.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animations;
