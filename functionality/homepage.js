
    document.querySelector('.cta form').addEventListener('submit', function(e) {
        e.preventDefault();

        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        if (email === '') {
            alert('Please enter your email address.');
            return;
        }

       
        const content = `Subscribed Email: ${email}`;

        
        const blob = new Blob([content], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'newsletter_subscription.txt';
        link.click();
        URL.revokeObjectURL(link.href);

        
        emailInput.value = '';
    });

