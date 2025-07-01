/*

This is a DEV-ONLY helper for use with the hotspot-image.njk partial

How to use:
1. Add the hospot component to your page and set your background image
2. Start the dev server, and paste the code below into your browser console
3. Click each area of the image where you want a hotspot to be (an entry will be added in the console with the exact coordinates)
4. Copy the coordinates for each hotpot into your component

*/


document.querySelector('.hotspot-bg').addEventListener('click', e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const topPct  = ((e.clientY - rect.top)  / rect.height) * 100;
    const leftPct = ((e.clientX - rect.left) / rect.width) * 100;
    console.log(`{ top: ${topPct.toFixed(1)}, left: ${leftPct.toFixed(1)} }`);
  });