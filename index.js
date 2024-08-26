const targetdate = new Date('2025-01-01T00:00:00')
function updatecount() {
    const currdate = new Date();

    const timediff = targetdate - currdate;

    const days = Math.floor(timediff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timediff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timediff % (1000 * 60)) / 1000)

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
    setTimeout(updatecount, 1000);

}
updatecount()