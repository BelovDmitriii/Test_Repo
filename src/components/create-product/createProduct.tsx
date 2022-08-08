function CreateProduct() {
  return(
    <form action="">
      <input
        type="text"
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Введите название...'
      />
      <button
        type='submit'
        className='py-2 px-4 border bg-yellow-400'
      >
        Create
      </button>
    </form>
  );
}

export default CreateProduct;