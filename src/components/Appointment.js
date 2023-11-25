import React, { useState } from 'react';
import DogImg from '../assets/img/dogs/dog-appointment.png';
import Swal from 'sweetalert2';

const Appointment = () => {
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!fullName || !email || !phoneNumber || !selectedDate || !selectedTimeSlot || !selectedFile) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please fill out all required fields.',
      });
      return;
    }

    // Perform any necessary actions with the form data
    // For example, you can upload the file to a server using FormData API

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Appointment Booked successfully.',
    });
  };

  return (
    <section className='bg-yellow-secondary py-12 lg:pb-12 lg:mt-32 relative min-h-[584px]'>
      <div className='container mx-auto'>
        <div>
          <div className='hidden w-full max-w-[790px] mx-auto lg:flex justify-center'>
            <img src={DogImg} alt='' />
          </div>
          <form className='bg-yellow py-8 px-6 w-full max-w-[790px] h-[500px] mx-auto lg:-mt-5 rounded-[60px] text-center flex flex-col justify-start items-center gap-y-4'>
            <h2 className='h2 my-4'>Get an appointment</h2>
            <input className='input-control' type='text' placeholder='Full name' value={fullName} onChange={handleFullNameChange} />
            <input className='input-control' type='text' placeholder='Email address' value={email} onChange={handleEmailChange} />
            <input className='input-control' type='text' placeholder='Phone number' value={phoneNumber} onChange={handlePhoneNumberChange} />
            <input
              className='input-control'
              type='date'
              value={selectedDate}
              onChange={handleDateChange}
            />
            <select
              className='input-control'
              value={selectedTimeSlot}
              onChange={handleTimeSlotChange}
            >
              <option value='' disabled>Time</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
            <input
              className='input-control'
              type='file'
              accept='.pdf, .doc, .docx'
              onChange={handleFileChange}
            />
            <button className='btn w-full max-w-[514px]' onClick={handleSubmit}>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
