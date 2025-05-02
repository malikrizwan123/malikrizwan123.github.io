
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const content = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

        const blob = new Blob([content], { type: 'text/plain' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'contact_form_submission.txt';

        link.click();

        URL.revokeObjectURL(link.href);
    });

