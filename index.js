console.log("Now it's time of javaScript");

// async function getSongs(){

//     const query = document.querySelector(".songSearch");
//     let url = await fetch(`https://saavn.dev/api/songs?query=${encodeURIComponent(query)}`);
//     const respone = await url.json();

//     if(respone.data.results.length === 0){
//         document.querySelector("input").placeholder = "Song Not found!!";
//         return;

//     }

//     const song = respone.data.results[0];
//     const audioUrl = song.downloadUrl[4].link;

//     document.querySelector(".songInfo").innerHTML = `<p><strong>${song.name}"</strong> by ${song.primaryArtists}</p>
//     <audio controls autoplay src = "${audioUrl}</audio>"`;
// }