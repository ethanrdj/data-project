const data = require('./data'); 

const selectEvents = (eventsArr, type) => {
    return eventsArr.filter(e => e.active === type).map(x => x);
};

const eventByTown = (townName) => {
    return data.filter(e => e.venue.town.toLowerCase().includes(townName.toLowerCase().trim()))
    }

    console.log(eventByTown(' MAn')) 