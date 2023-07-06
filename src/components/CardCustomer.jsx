

const CardCustomer = ({customer, setOpenInfoModal, setCurrentCustomer}) => {

  const handleOpenModal = () => {
    setOpenInfoModal(true)
    setCurrentCustomer(customer)
  }

  return (
    

    <div className='bg-gray-300 hover:bg-white rounded hover:border-2 hover:border-secondary cursor-pointer ' onClick={handleOpenModal}>
        <p className='text-primary m-4'>{customer.customer}</p>
        <img className='w-full max-h-44 min-h-40 px-8 py-6 border-b border-primary rounded' src={customer.image} alt="" />
    </div> 

  )
}

export default CardCustomer