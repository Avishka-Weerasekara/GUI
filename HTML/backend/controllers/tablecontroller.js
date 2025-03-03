import tbRes from "../models/tbRes.js";

const addRes = async (req, res) => {
    try {
      console.log("Received reservation data:", req.body);
      const { name, email, phone, groupSize, date, time } = req.body;
  
      if (!name || !email || !phone || !groupSize || !date || !time) {
        return res.status(400).json({ 
          error: "All fields are required", 
          details: { name, email, phone, groupSize, date, time }
        });
      }
  
      // Validate and parse date
      let parsedDate;
      try {
        parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
          throw new Error("Invalid date format");
        }
      } catch (err) {
        return res.status(400).json({ error: "Invalid date format: " + err.message });
      }
  
      // Validate groupSize as a number
      const groupSizeNum = Number(groupSize);
      if (isNaN(groupSizeNum)) {
        return res.status(400).json({ error: "Group size must be a valid number" });
      }
  
      console.log("Parsed values:", {
        name,
        email,
        phone: String(phone),
        groupSize: groupSizeNum,
        date: formattedDate,
        time
      });
  
      const newReservation = new tbRes({
        name,
        email,
        phone: String(phone),
        groupSize: groupSizeNum,
        date: parsedDate,
        time,
      });
  
      const savedReservation = await newReservation.save();
      res.status(201).json({
        message: "Reservation added successfully",
        data: savedReservation,
      });
    } catch (error) {
      console.error("Error adding reservation:", error);
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: "Invalid data format: " + error.message });
      }
      res.status(500).json({ error: "Server error while adding reservation" });
    }
  };

export { addRes };