function CartHeader() {
  return (
    <div className='hidden grid-cols-[auto_1fr_auto_auto_auto] gap-6 border-b pb-4 font-semibold md:grid'>
      <div className='w-6' /> {/* Space for remove button */}
      <div>Product</div>
      <div>Price</div>
      <div className='text-center'>Quantity</div>
      <div className='text-right'>Subtotal</div>
    </div>
  );
}

export default CartHeader;
