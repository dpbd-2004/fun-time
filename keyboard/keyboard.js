const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class="key-container animate">
            <div class="key">Key Pressed: <strong>${e.key === ' ' ? 'Space' : e.key}</strong></div>
            <table>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th> 
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === ' ' ? 'Space' : e.key}</td>
                    <td>${e.keyCode}</td> 
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;

    // Apply animation effect
    const keyContainer = document.querySelector('.key-container');
    keyContainer.classList.add('animate');
    setTimeout(() => keyContainer.classList.remove('animate'), 200);
});

