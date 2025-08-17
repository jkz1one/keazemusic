export interface Album {
    title: string;
    imgSrc: string;
    credits: string[];
    links: {
      spotify?: string;
      apple?: string;
      bandcamp?: string;
      youtube?: string;
      soundcloud?: string;
    };
  }
  
  const albumData: Album[] = [
    {
      title: "SAGA: NYC - NEAGAS x MELLOMATT", 
      imgSrc: "/albums/SAGA.jpg",
      credits: ["Co-Produced, Mixed, Mastered: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/7c7ETjy69sc7V35h5PKDbE?si=VqQSdErCQHy7YJz-zzrhXw",
        apple: "https://music.apple.com/us/album/saga-nyc/1820478036",
        youtube: "https://youtube.com/playlist?list=OLAK5uy_kzgmJAau43dsZNOSonqQRZjgdx49ZkOmI&si=rCQYiZLfomvHrToP"
      }
    },  
    {
      title: "OFF GRID COMMS - AHZUH", 
      imgSrc: "/albums/ogc.jpg",
      credits: ["Mixed, Mastered, & Recorded: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/4KvR42fjWoxMeENpkgqCif?si=4P2-5wlvSC-MbJ47-sMmGg",
        apple: "https://music.apple.com/us/album/off-grid-comms/1749715546",
        youtube: "https://youtube.com/playlist?list=OLAK5uy_kr1pOgXB59mhYgL1UJTiKg9eBvKCoQVTA&si=5W4JO3vKkRaPA8HJ"
      }
    },  
    {
      title: "CHAMPAGNE SHIT FREESTYLE - 3DM x PRETTY KARTIER", 
      imgSrc: "/albums/champagne.jpg",
      credits: ["Recorded: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/6IJuG2hS3ufjsNMNAZRhOW?si=k4A2Jz2yRqODnVLG3mWASg",
        apple: "https://music.apple.com/ca/album/champagne-shit-freestyle-single/1747902496",
        youtube: "https://youtu.be/4HRc3bx7l_Y?si=7H37I7mHT0fxSvGO"
      }
    },
    {
      title: "R E D U X - KEAZE", 
      imgSrc: "/albums/redux.jpg",
      credits: ["Mixed, Mastered and Produced: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/3iOCBEsV6piHtziuGeIMmv?si=17QoVoN_Q_2hbxmMeNrp-g",
        apple: "https://music.apple.com/us/album/r-e-d-u-x-ep/1733587736",
        youtube: "https://youtube.com/playlist?list=OLAK5uy_lcebYvb46IXoeOdrTGMFZ-4VMHxU9wORs&si=QvLI8VPe_hXkVyhP"
      }
    },   
    {
      title: "MY NAME - TYRXNE",
      imgSrc: "/albums/my-name.jpg",
      credits: ["Mixed, Mastered and Produced: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/3DDQ2yatvVDAkIhECqhxr9?si=6VmZfd1iRjGwoAEaAS9KVA",
        apple: "https://music.apple.com/us/album/my-name-single/1726421487",
        youtube: "https://www.youtube.com/watch?v=k_7oDaYFCnM&ab_channel=TYRXNE-Topic"
      }
    }, 
    {
      title: "HEAR.NO.EVIL - KEMBA", 
      imgSrc: "/albums/hearno1.jpg",
      credits: ["Mixed and Mastered: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/track/2IrEByEjannjnbx44UIF4b?si=32327c7b9d6a4f58",
        apple: "https://music.apple.com/ca/song/hear-no-evil/1732094012",
        youtube: "https://youtu.be/_4skoH9PxBE?si=9A0Ou0yxj5doBaPo"
      }
    },  
    {
      title: "DONT.TELL.NOBODY - KEMBA", 
      imgSrc: "/albums/donttell.jpg",
      credits: ["Mixed and Mastered: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/6fQ1en3gLW3hrlSkD2AVEj?si=EB8j3KqaSi-J6BdoiZebGg",
        apple: "https://music.apple.com/ca/song/dont-tell-nobody/1722820594",
        youtube: "https://youtu.be/enNdBDDMqps?si=44LK1DtWAgLgBSIj"
      }
    },  
    {
      title: "MANOLO LOAFERS - AHZUH", 
      imgSrc: "/albums/manolo.jpg",
      credits: ["Mixed and Mastered: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/track/42DBUxQU2jGZHduZgfWjMI?si=50f8b851afd14291",
        apple: "https://music.apple.com/us/album/manolo-loafers-single/1716944213",
      }
    },  
    {
      title: "HUMIDOR: OLD PALE & PANETELA - NEED ANOTHER DUTCH CLUB", 
      imgSrc: "/albums/humidor.jpg",
      credits: ["CO-PRODUCED, MIXED, MASTERED: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/6sipvxH4dqZEajDCytRE5s?si=EM-zMMWCT2OeLu_hGTouyQ",
        apple: "https://music.apple.com/ug/album/humidor-old-pale-panetela/1716930829",
        youtube: "https://youtu.be/R1epF7FC5p0?si=c6Q7TdDNpvAgOPED"
      }
    },    
    {
      title: "EL PELIGRO - TYRXNE",
      imgSrc: "/albums/el-peligro.jpg",
      credits: ["Produced tracks 4 & 12: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/3k6a74VruUBkTElU4krcII?si=0TBBYVaITcOmjlnXHPAkeg",
        apple: "https://music.apple.com/us/album/el-peligro-1-5/1713227657",
      }
    },    
    {
      title: "FOR ALL MY ILLUSIONS NEED ENDING - SYOP",
      imgSrc: "/albums/famine.jpg",
      credits: ["RECORDING, MIXING & MASTERING: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/0fkpXvr8GprDEtxyKkYtA1?si=thX-T0arQYmdBgrqTGA0YA",
        apple: "https://music.apple.com/us/album/for-all-my-illusions-need-ending/1707966102",
        youtube: "https://youtube.com/playlist?list=OLAK5uy_lAgXtOZ0xAUs0I7VP91hBvwl4cSjsH3_E&si=OSxtAYgTIjbcexGT",
      }
    },    
    {
      title: "NO GO - AHZUH",
      imgSrc: "/albums/no-go.jpg",
      credits: ["Recording, Mixing & Mastering: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/1qZyuhk3rKTlbDoyuuUhR0?si=qFzyOaU4ThOPL9BoptcrHA",
        apple: "https://music.apple.com/us/album/no-go-single/1708072429",
        youtube: "https://youtu.be/u1KUlncIU8E?si=lvUSaiLFgw4h3aV0",
      }
    },    
    {
      title: "AHZUH VS THE MUDPACK - AHZUH",
      imgSrc: "/albums/avtm.png",
      credits: ["Recording, Mixing & Mastering: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/0DcyHDH3LAGXAEevPskfK5?si=JLz42bToRA2VStG_Y3N4wQ",
        apple: "https://music.apple.com/us/album/ahzuh-vs-the-mudpack/1699501426",
        youtube: "https://youtube.com/playlist?list=OLAK5uy_lM4rn8qw0Ik1ca1vKUhdlJCmHRaeS5oQc&si=mblNNSxVHQ-bTzTv",
      }
    },    
    {
      title: "KEYS OPEN DOORS - WORLD BE FREE & KEAZE",
      imgSrc: "/albums/keys-open-doors.jpg",
      credits: ["Mastered & Produced: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/1EF1SyRMwv3IShjj8l18ZJ?si=fUPNYOw0RCmpfs8DnvdaAA",
        apple: "https://open.spotify.com/album/1EF1SyRMwv3IShjj8l18ZJ?si=fUPNYOw0RCmpfs8DnvdaAA",
        youtube: "https://youtube.com/playlist?list=OLAK5uy_lGrPdzbO5fDXmTTIb6V3dR7oHCxB8JGB8&si=tEUL_o_Ypv57DfLA",
      }
    },    
    {
      title: "APPLE TREE - BLAHSUM",
      imgSrc: "/albums/apple-tree.jpg",
      credits: ["Mastered: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/track/2lwDAgg0izAM2ZOnI9Zj5k?si=f016708c95c94902",
        apple: "https://youtu.be/y5hW_jHapu8?si=w4RVNFT2osHQTnio",
        youtube: "https://music.apple.com/us/album/apple-tree-single/1679724390 ",
      }
    },    
    {
      title: "PANIC ROOM - TYRXNE",
      imgSrc: "/albums/panic-room.jpg",
      credits: ["Mastered and Produced: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/track/5tkcV1qIcsWw0RINLRMQIX?si=e98dd59d0cd6441d",
        apple: "https://music.apple.com/us/song/panic-room/1514646590",
        youtube: "https://youtu.be/1N-B0pgeYbc?si=8v4IzkKORivC4qvm",
      }
    },    
    {
      title: "KNOW MY NAME - TYRXNE",
      imgSrc: "/albums/know-my-name.jpg",
      credits: ["Mastered and Produced: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/1ROjg4I9jcpUnsR6YbQUQY?si=2yhXrZ-4S86qPUUCOrX2dA",
        apple: "https://music.apple.com/us/album/know-my-name-single/1514601639",
        youtube: "https://youtu.be/J-tWSjTb2Ow?si=q3tDuX4uIy3mMIcT",
      }
    },
    {
      title: "NEW YEAR - TYRXNE",
      imgSrc: "/albums/new-year.jpg",
      credits: ["Mastered and Produced: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/track/1oXKPQJoiR7hkHENPQsPaS?si=deedb91fab4d4305",
        apple: "https://music.apple.com/us/album/new-year-single/1514619802",
        youtube: "https://youtu.be/g-bNbypySDI?si=svG8vJiINjvSC62K",
      }
    },    
    {
      title: "ROUND HERE - TYRXNE",
      imgSrc: "/albums/round-here.jpg",
      credits: ["Mixed, Mastered and Produced: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/album/6BaQ60HPWSD41usRoPZEZu?si=h89E0vLTSxerD86V1SSk0w",
        apple: "https://music.apple.com/us/song/round-here-keaze-mix/1514645808",
        youtube: "https://www.youtube.com/watch?v=imzNvPaD81I&ab_channel=TYRXNE-Topic",
      }
    },    
    {
      title: "KNOW YOU KNOW - IVPOKKO",
      imgSrc: "/albums/know-you-know.jpg",
      credits: ["Produced: KEAZE"],
      links: {
        spotify: "https://open.spotify.com/track/6g76lHhxcnO6sAyCHD1NoV?si=2eecc08e8a1b46eb",
        apple: "https://music.apple.com/us/song/now-you-know/1515815542",
      }
    },    
    {
      title: "EXIT 99 - JO$E ZAVALA",
      imgSrc: "/albums/exit-99.jpg",
      credits: ["Produced: KEAZE"],
      links: {
        soundcloud: "https://soundcloud.com/jo-e-zavala/exit-99-jo-e-zavala-prod-keaze?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fjo-e-zavala%252Fexit-99-jo-e-zavala-prod-keaze",
      }
    },    
    {
        title: "VIBE OUT I-XII - KEAZE",
        imgSrc: "/albums/vibe-out.jpg",
        credits: ["Mixed, Mastered and Produced: KEAZE"],
        links: {
          spotify: "https://www.youtube.com/watch?v=LfvZigDel7Q&ab_channel=Keaze",
          bandcamp: "https://keaze.bandcamp.com/album/vibe-out-i-xii",
        }
      },
    {
      title: "NEW DAY - TYRXNE",
      imgSrc: "/albums/new-day.jpg",
      credits: ["Produced and Mastered: KEAZE"],
      links: {
        youtube: "https://www.youtube.com/watch?v=UFkYUfc4xC4&ab_channel=tyrxne",
      }
    }
  ];
  
  export default albumData;
  