
const Chat = () => {
  return (
    <div className='h-[300px] w-full bg-slate-400 rounded p-2 mt-10'>
        <div className='bg-blue-400 h-[250px] rounded'>

        </div>
        <div>
            <form className='flex items-center justify-between mt-1'>
                <input type="text" className='rounded p-1 text-black focus:outline-none w-full'/>
                <button className='border rounded px-6 py-1'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Chat