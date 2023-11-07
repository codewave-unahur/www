import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = ({ token }) => {
    const [feeds, setFeeds] = useState([
        { id: 1, media_url: 'https://www.bing.com/images/search?view=detailV2&ccid=%2FSJudLFv&id=B41824F70D94A001B7D2EA9EDECC7CA0152631C5&thid=OIP._SJudLFvjr_Lk6EuubIs-wHaE8&mediaurl=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Finstrument-drum-musical-instrument-percussion-jazz-drums-rhythm-percussion-instrument-timpani-bass-drum-electronic-instrument-skin-head-percussion-instrument-hand-drum-timbales-snare-drum-tom-tom-drum-timbale-521216.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.fd226e74b16f8ebfcb93a12eb9b22cfb%3Frik%3DxTEmFaB8zN6e6g%26pid%3DImgRaw%26r%3D0&exph=3456&expw=5184&q=im%c3%a1genes+de+instrumentos+instagram&simid=607991233103803426&form=IRPRST&ck=E44CB44F2CA8B7BC8CB1D528DFF352F9&selectedindex=16&ajaxhist=0&ajaxserp=0&vt=0&sim=11', caption: 'Descripción ficticia 1' },
        { id: 2, media_url: 'https://www.bing.com/images/search?view=detailV2&ccid=Yh0zXlL4&id=CD2394CC2B459DBCB41FA916779EBD477195428C&thid=OIP.Yh0zXlL4W5SBw2QbHtxz_QHaEK&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6b%2F69%2F70%2F6b6970ad6d0672daf8803ee734997292.png&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.621d335e52f85b9481c3641b1edc73fd%3Frik%3DjEKVcUe9nncWqQ%26pid%3DImgRaw%26r%3D0&exph=608&expw=1080&q=im%c3%a1genes+de+instrumentos+instagram&simid=608036119794445886&form=IRPRST&ck=11DA5E74BABE82E2FE4633F777D5DDB2&selectedindex=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11', caption: 'Descripción ficticia 2' },
    ]);

    useEffect(() => {
        const fetchFeeds = async () => {
            try {
                const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${token}`);
                setFeeds(response.data.data);
            } catch (error) {
                console.error('Error fetching feeds:', error);
            }
        };

        fetchFeeds();
    }, [token]);

    return (
        <div>
            {feeds.map((feed) => (
                <div key={feed.id}>
                    <img src={feed.media_url} alt={feed.caption} />
                    <p>{feed.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default Feed;
