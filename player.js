const playList = {
    playListId: "1",
    playListInfo: {
        title: "Hip-hop hits",
        coverImageUrl: "cover.avif",
        totalInfo: {
            totaltrackCount: 4,
            totaltracksDurationInSec: 733
        }
    },
    tracks: [
        {
            trackId: "11",
            trackCoverImageUrl: "eminem.jpg",
            artistName: "Eminem",
            trackTitle: "Rap God",
            trackFileUrl: "eminem_-_rap_god_(muztune.me).mp3",
            trackDurationInSec: 1,
            isHot: false
        },
        {
            trackId: "12",
            trackCoverImageUrl: "50cent.jpg",
            artistName: "50cent",
            trackTitle: "In da Club",
            trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
            trackDurationInSec: 1,
            isHot: true
        },
    ]
};


// const playListTitleEl = document.createElement("h1");
// playListTitleEl.append(playList.title);
// document.body.append(playListTitleEl);

// const playListCoverEl = document.createElement("img");
// playListCoverEl.src = playList.coverImageUrl;
// playListCoverEl.style.width = "100px";
// playListCoverEl.style.height = "100px";
// document.body.append(playListCoverEl)

// const tracksListEl = document.createElement("ul")

// const track_1_El = document.createElement("li")
// track_1_El.append(playList.tracks[0].artistName + ": " + playList.tracks[0].trackTitle)

// const track_2_El = document.createElement("li")
// track_2_El.append(playList.tracks[1].artistName + ": " + playList.tracks[1].trackTitle)

// tracksListEl.append(track_1_El, track_2_El)
// document.body.append(tracksListEl)


function renderPlayList(anyPlayList) {
    renderPlayListHeader(anyPlayList.playListInfo)
    renderTrack(anyPlayList.tracks[0])
    renderTrack(anyPlayList.tracks[1])
}

function renderPlayListHeader(anyPlayListInfo) {
    const playListTitleEl = document.createElement("h1");
    playListTitleEl.append(anyPlayListInfo.title);
    document.body.append(playListTitleEl);

    const playListCoverEl = document.createElement("img");
    playListCoverEl.src = anyPlayListInfo.coverImageUrl;
    playListCoverEl.style.width = "150px";
    playListCoverEl.style.height = "150px";
    document.body.append(playListCoverEl)
}

function renderTrack(anyTrack) {
    

    const trackEl = document.createElement("div")
    const cover = document.createElement("img")
    cover.style.width = "50px"
    cover.src = anyTrack.trackCoverImageUrl
    trackEl.append(cover)
    trackEl.append(anyTrack.artistName + ": " + anyTrack.trackTitle)

    const audio = document.createElement("audio")
    audio.src = anyTrack. trackFileUrl
    audio.controls = true
    trackEl.append(audio)
    document.body.append(trackEl)
}

renderPlayList(playList)



