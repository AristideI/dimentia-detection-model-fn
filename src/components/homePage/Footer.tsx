export default function Footer() {
  return (
    <div className="flex items-end w-full mt-20 bg-primary-300/5">
      <footer className="w-full text-gray-700 bg-primary-300/35 body-font">
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
