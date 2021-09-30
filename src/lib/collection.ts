export function fetchCollection() {
  /**
   * Step 2: Instead of directly returning the collection, fetch it from http://localhost:8001/cards
   */
  return [
    {
      id: 1,
      player: {
        firstname: 'John',
        lastname: 'Doe',
        birthday: '1993-07-22T08:38:50.090Z',
      },
    },
  ];
}
