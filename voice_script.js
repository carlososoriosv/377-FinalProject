if (annyang) {
    // Define voice commands
    var commands = {
        'hello': function() { alert('Hello World'); },
        'change the color to :color': function(color) { document.body.style.backgroundColor = color; },
        'navigate to :page': function(page) { window.location.href = page.toLowerCase() + '.html'; },
    };

    // Add voice commands to annyang
    annyang.addCommands(commands);

    // Start annyang voice recognition
    annyang.start();

    // Add event listeners for turning off and on voice recognition
    document.getElementById('turnOff').addEventListener('click', function() { annyang.pause(); });
    document.getElementById('turnOn').addEventListener('click', function() { annyang.resume(); });
}