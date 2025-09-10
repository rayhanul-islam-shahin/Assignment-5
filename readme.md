1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

      getElementById দিয়ে শুধু মাত্র Id পাওয়া যায়।

      getElementsByClassName দিয়ে শুধু মাত্র Class পাওয়া যায় array-like list দেয়।

      querySelector: দিয়ে একটি মাত্র Id অথবা একটি মাত্র Class পাওয়া যায়

      querySelectorAll দিয়ে সবগুলো Class পাওয়া যায় তবে  এটিও  array-like list দেয়।



2. How do you create and insert a new element into the DOM?

      let praGraph = document.createElement('p');
      praGraph.textContent = 'Hello world!';
      document.body.appendChild(praGraph);



3. What is Event Bubbling and how does it work?

      Event Bubbling হলো একটা process যেখানে কোনো element এ event করানো সেটা ধীরে ধীরে তার parent এর কাছে যায়, তারপর ধাপে ধাপে উপরে উঠতে থাকে।



4. 


preventDefault() = হলো from tag এর ভেতরে কোনো বাটন ক্লিক করলে এবং সেই বাটনে যদি type="button" দেয়া না থাকে তাহলে from tag সেটাকে সাবমিট বাটন হিসেবে ধরে নেয়, সেটাকে অটো সাবমিট বাটন এর হওয়ার থেকে বিরত রাখতে preventDefault() ব্যবহার করা হয়। 

stopPropagation() = event উপরে বা নিচে ছড়ানো বন্ধ করে।