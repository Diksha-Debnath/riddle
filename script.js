const riddles = {
  1: "I'm the first, yet second in use, Written proud, but often refused. I stand before all paths you take, Through me, new journeys you awake. Your quest begins where all paths meet - Find the threshold where knowledge greets.",

  2: "At first glance, I may seem plain, Yet my quiet strength will not wane. Around me stand my loyal guards, who watch all - from laughter to scars. They see your secrets, dreams, and falls, within these ever-listening walls. Then stands my sage, serene and fair, with heart-shaped hair and patient care. Now tell me, name this special place, Or think of Chicago to trace.",

  3: "My torque once sang through metal veins, now rust conducts what oil sustains. No spark ignites my silent core, My gearbox dreams of roads no more. Find me where circuits sleep in dust, And echoes ride on wheels of rust.",

  4: "Copies and notes made me a name, till a cool mistake brought me shame. Two minds guide this curious domain - One ever seated, one won't remain.",

  5: "Once filled with chatter, now kissed by rust. My doors are tired, walls still breathe but remember knocks on layers of dust. No guest remains, yet footsteps tread. Your quest has awaited where time moved on, but stories stayed.",

  6: "My soul still hums through the metal scars. I've chased the stars. I raced like thunder's twin. Grease, gears and a whispering clue. You seek flame? Look below the wheel, there your hidden clue thrills.",

  7: "I've seen the rush, I've felt the pause. Below the halls where lectures hum, I wait where footsteps seldom come. I wait in the shadows, still, apart. Seek me where wheels take a sleep, the clue you chase is mine to keep.",
  
  8: "I've heard more secrets than any classrooms ever could. I've seen the dawn, I've felt the dusk. My bells have aged with faith and trust. Beneath the stone, beside the will. Your next clue hides, where heart bows and peace resides."
};

function getRiddleId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('riddle..........');
}

window.onload = () => {
  const riddleId = getRiddleId();
  const riddleElem = document.getElementById('riddle-text');

  if (riddleId && riddles[riddleId]) {
    riddleElem.textContent = riddles[riddleId];
  } else {
    riddleElem.textContent = "No valid riddle found. Please scan a valid QR code.";
  }
};


