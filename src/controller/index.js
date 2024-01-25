const homePage = (req, res) => {
  res.status(200).send(`
   <div>
   <h1>Welcome to My Hall Booking API</h1>
   <pre>
       Get all Rooms = endpoint: /rooms
       New Hall Booking = endpoint/:id
       Take a list of Booked rooms = endpoint: /rooms/customer
       Create a new room = endpoint: /rooms/
   </pre>
</div>
   `);
};

export default { homePage };
