import { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../../constants/colors";

const RSVPForm = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    attending: "Yes",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("RSVP Submitted Successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      guests: "1",
      attending: "Yes",
      message: "",
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl rounded-[40px] border border-white/60 bg-white/70 p-10 backdrop-blur-xl"
      style={{
        boxShadow:
          "0 25px 70px rgba(0,0,0,.08),0 0 40px rgba(201,162,39,.12)",
      }}
    >

      <div className="grid gap-6 md:grid-cols-2">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="input input-bordered h-14 rounded-xl"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="input input-bordered h-14 rounded-xl"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="input input-bordered h-14 rounded-xl"
        />

        <select
          name="guests"
          value={form.guests}
          onChange={handleChange}
          className="select select-bordered h-14 rounded-xl"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
        </select>

      </div>

      <div className="mt-8">

        <label className="mb-3 block font-medium">
          Will You Attend?
        </label>

        <div className="flex gap-8">

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="attending"
              value="Yes"
              checked={form.attending === "Yes"}
              onChange={handleChange}
              className="radio"
            />

            Yes
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="attending"
              value="No"
              checked={form.attending === "No"}
              onChange={handleChange}
              className="radio"
            />

            No
          </label>

        </div>

      </div>

      <textarea
        name="message"
        placeholder="Leave your wishes..."
        value={form.message}
        onChange={handleChange}
        rows="5"
        className="textarea textarea-bordered mt-8 w-full rounded-xl"
      />

      <button
        type="submit"
        className="mt-10 w-full rounded-full py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
        style={{
        background: `linear-gradient(90deg,
        ${COLORS.gold},
        ${COLORS.goldLight},
        ${COLORS.gold})`,
        boxShadow: "0 15px 40px rgba(201,162,39,.35)",
      }}
      >
        Send RSVP
      </button>

    </motion.form>
  );
};

export default RSVPForm;