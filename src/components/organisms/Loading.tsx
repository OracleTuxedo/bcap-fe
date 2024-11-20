const Loading = () => {
    return (
        <div id="loading" className="fixed inset-0 flex items-center justify-center bg-sidebar-normal bg-opacity-75">
          <div className="flex flex-col items-center">
            <div className="loader border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
            <p className="text-white mt-4">Loading...</p>
          </div>
        </div>
      );
}

export default Loading;