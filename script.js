function showSeedPhraseScreen() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('seed-phrase-screen').style.display = 'block';
    generateSeedPhrase();
}

function generateSeedPhrase() {
    const words = ['digital', 'skull', 'weapon', 'move', 'type', 'inform', 'follow', 'crisp', 'senior', 'crystal', 'dice', 'quote'];
    const seedPhrase = words.join(' ');
    document.getElementById('seed-phrase').innerText = seedPhrase;
}

function copyToClipboard() {
    const seedPhrase = document.getElementById('seed-phrase').innerText;
    navigator.clipboard.writeText(seedPhrase).then(() => {
        alert('Seed phrase copied to clipboard');
    });
}

function showConfirmationScreen() {
    document.getElementById('seed-phrase-screen').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'block';
}

function confirmSeedPhrase() {
    const input = document.getElementById('confirmation-input').value;
    const seedPhrase = document.getElementById('seed-phrase').innerText;
    if (input === seedPhrase) {
        document.getElementById('confirmation-screen').style.display = 'none';
        document.getElementById('success-screen').style.display = 'block';
    } else {
        alert('Incorrect seed phrase. Please try again.');
    }
}

function showWalletInterface() {
    document.getElementById('success-screen').style.display = 'none';
    document.getElementById('wallet-interface').style.display = 'block';
}

function receiveCrypto() {
    alert('Receiving crypto functionality will be here.');
}

function sendCrypto() {
    alert('Sending crypto functionality will be here.');
      }
