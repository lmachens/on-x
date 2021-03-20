console.log("Background!!");

// overwolf.windows.close("desktop", console.log);

overwolf.games.launchers.events.setRequiredFeatures(
  10902,
  ["game_flow", "lobby_info"],
  () => {
    console.log("Features set");

    overwolf.games.launchers.events.onInfoUpdates.addListener((event) => {
      //   console.log(event);
      if (event.info?.game_flow?.phase === "Lobby") {
        overwolf.windows.obtainDeclaredWindow("desktop", console.log);
        overwolf.windows.restore("desktop", console.log);
      }
    });
  }
);

export {};
