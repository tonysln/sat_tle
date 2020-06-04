function convert_dt(msg) {
    const hours = (msg - parseInt(msg)) * 24;
    const minutes = (hours - parseInt(hours)) * 60;
    const seconds = (minutes - parseInt(minutes)) * 60;
    return parseInt(msg).toString().padStart(3, '0') + ':' + parseInt(hours).toString().padStart(2, '0')
        + ':' + parseInt(minutes).toString().padStart(2, '0') + ':' + seconds.toFixed(2);
}

function parse() {
    // Display the main result block & footer.
    document.getElementById('parsed_box').style.display = 'block';
    document.getElementById('footer').style.display = 'block';

    let msg = document.getElementById('raw_tle').value.split('\n');
    // Add an empty line if no title line is provided (so the indices stay correct).
    if (msg.length == 2) {
        msg.splice(0, 0, '');
    }

    document.getElementById('name').textContent = msg[0].trim();
    document.getElementById('catnum').textContent = parseFloat(msg[1].substr(2, 5));
    document.getElementById('class').textContent = msg[1].charAt(7);

    const code_year = 57 >= parseFloat(msg[1].substr(9, 2)) < 0 ? '19' : '20' + msg[1].substr(9, 2);
    document.getElementById('intcode').textContent =
        code_year + '-' + msg[1].substr(12, 2).padStart(3, '0') + msg[1].substr(14, 3).trim();

    const epoch_year = 57 >= parseFloat(msg[1].substr(18, 2)) < 0 ? '19' : '20' + msg[1].substr(18, 2);
    document.getElementById('datev').textContent =
        epoch_year + '/' + convert_dt(parseFloat(msg[1].substr(20, 12)));

    document.getElementById('ballcoef').textContent = parseFloat(msg[1].substr(33, 10));
    document.getElementById('meanmotsecond').textContent =
        parseFloat('0.' + '0'.repeat(parseFloat(msg[1].charAt(51))) + msg[1].substr(44, 6).trim());
    document.getElementById('dragt').textContent =
        parseFloat(msg[1].charAt(53).trim() + '0.' + '0'.repeat(parseFloat(msg[1].charAt(60))) + msg[1].substr(54, 5));
    document.getElementById('ephem').textContent = parseFloat(msg[1].charAt(62));
    document.getElementById('elemnum').textContent = parseFloat(msg[1].substr(65, 3));
    document.getElementById('chck1').textContent = parseFloat(msg[1].charAt(68));
    document.getElementById('incl').textContent = parseFloat(msg[2].substr(8, 8));
    document.getElementById('raotan').textContent = parseFloat(msg[2].substr(17, 8));
    document.getElementById('meanecc').textContent = parseFloat('0.' + msg[2].substr(26, 7));
    document.getElementById('argperi').textContent = parseFloat(msg[2].substr(34, 8));
    document.getElementById('meanano').textContent = parseFloat(msg[2].substr(43, 8));
    document.getElementById('meanmot').textContent = parseFloat(msg[2].substr(52, 11));
    document.getElementById('revol').textContent = parseFloat(msg[2].substr(63, 5));
    document.getElementById('chck2').textContent = parseFloat(msg[2].charAt(68));
}
