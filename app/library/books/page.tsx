"use client";

import { useState, useMemo } from "react";

type Book = {
	id: number;
	title: string;
	author: string;
	description: string;
	url: string;
	downloadUrl: string;
};

const booksData: Book[] = [
	{
		id: 1,
		title: "Data Structures and Algorithms",
		author: "Robert Sedgewick",
		description: "A comprehensive introduction to data structures and algorithms, covering both theory and practical implementation.",
		url: "https://library.tutor-support.com/book/1",
		downloadUrl: "/fake-books/data-structures.pdf",
	},
	{
		id: 2,
		title: "Operating System Concepts",
		author: "Abraham Silberschatz",
		description: "Classic textbook on operating systems, processes, memory management, and more.",
		url: "https://library.tutor-support.com/book/2",
		downloadUrl: "/fake-books/os-concepts.pdf",
	},
	{
		id: 3,
		title: "Computer Networks",
		author: "Andrew S. Tanenbaum",
		description: "A detailed look at computer networking, protocols, and architectures.",
		url: "https://library.tutor-support.com/book/3",
		downloadUrl: "/fake-books/computer-networks.pdf",
	},
	{
		id: 4,
		title: "Introduction to Algorithms",
		author: "Thomas H. Cormen",
		description: "Widely used reference for algorithms, including pseudocode and complexity analysis.",
		url: "https://library.tutor-support.com/book/4",
		downloadUrl: "/fake-books/intro-algorithms.pdf",
	},
	{
		id: 5,
		title: "Artificial Intelligence: A Modern Approach",
		author: "Stuart Russell and Peter Norvig",
		description: "Comprehensive textbook on AI, covering a wide range of techniques and applications.",
		url: "https://library.tutor-support.com/book/5",
		downloadUrl: "/fake-books/ai-modern-approach.pdf",
	},
	{
		id: 6,
		title: "Deep Learning",
		author: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
		description: "A comprehensive introduction to deep learning, covering theory and practical applications.",
		url: "https://library.tutor-support.com/book/6",
		downloadUrl: "/fake-books/deep-learning.pdf",
	},
	{
		id: 7,
		title: "Machine Learning",
		author: "Tom M. Mitchell",
		description: "An introduction to the concepts and techniques of machine learning.",
		url: "https://library.tutor-support.com/book/7",
		downloadUrl: "/fake-books/machine-learning.pdf",
	},
	{
		id: 8,
		title: "Reinforcement Learning: An Introduction",
		author: "Richard S. Sutton and Andrew G. Barto",
		description: "A comprehensive introduction to reinforcement learning, covering both theory and practical applications.",
		url: "https://library.tutor-support.com/book/8",
		downloadUrl: "/fake-books/reinforcement-learning.pdf",
	},
	{
		id: 9,
		title: "Deep Reinforcement Learning Hands-On",
		author: "Maxim Lapan",
		description: "A practical guide to implementing deep reinforcement learning algorithms using Python and PyTorch.",
		url: "https://library.tutor-support.com/book/9",
		downloadUrl: "/fake-books/deep-reinforcement-learning.pdf",
	},
	{
		id: 10,
		title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
		author: "Aurélien Géron",
		description: "A practical guide to implementing machine learning algorithms using popular Python libraries.",
		url: "https://library.tutor-support.com/book/10",
		downloadUrl: "/fake-books/hands-on-machine-learning.pdf",
	},
	{
		id: 11,
		title: "Natural Language Processing with Transformers",
		author: "Lewis Tunstall, Leandro von Werra, and Thomas Wolf",
		description: "A comprehensive guide to using transformer models for natural language processing tasks.",
		url: "https://library.tutor-support.com/book/11",
		downloadUrl: "/fake-books/nlp-transformers.pdf",
	},
	{
		id: 12,
		title: "Hands-On Deep Learning for Images with TensorFlow",
		author: "Will Ballard",
		description: "A practical guide to implementing deep learning algorithms for image processing tasks using TensorFlow.",
		url: "https://library.tutor-support.com/book/12",
		downloadUrl: "/fake-books/hands-on-deep-learning-images.pdf",
	}
];

export default function LibraryBooksPage() {
	const [search, setSearch] = useState("");
	const [selectedBook, setSelectedBook] = useState<Book | null>(null);
	const [modalClosing, setModalClosing] = useState(false);
	const [copied, setCopied] = useState(false);

	const filteredBooks = useMemo(() => {
		const q = search.trim().toLowerCase();
		if (!q) return booksData;
		return booksData.filter(
			(b) =>
				b.title.toLowerCase().includes(q) ||
				b.author.toLowerCase().includes(q) ||
				b.description.toLowerCase().includes(q)
		);
	}, [search]);

	const handleShare = async (url: string) => {
		try {
			navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 1200);
		} catch {
			setCopied(false);
		}
	};

	return (
		<div className="min-h-screen bg-linear-to-br from-sky-50 via-white to-indigo-50 text-slate-900 font-sans p-6">
			<div className="max-w-6xl mx-auto">
				{/* Hero */}
				<div className="mb-6 rounded-2xl bg-white/80 p-6 shadow-lg border border-white/60 backdrop-blur-sm">
					<h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-sky-500">Library</h1>
					<p className="text-sm text-slate-600">Browse and download study materials. Click a book to see details, share a link, or download a copy.</p>
				</div>

				{/* Search Bar */}
				<div className="mb-6 flex justify-center">
					<input
						type="text"
						value={search}
						onChange={e => setSearch(e.target.value)}
						placeholder="Search books by title, author, or keyword..."
						className="w-full max-w-2xl px-5 py-3 rounded-2xl border border-gray-200 shadow-sm focus:ring-4 focus:ring-indigo-200 outline-none text-lg transition"
					/>
				</div>

				{/* Book List */}
				<div className="grid grid-cols-1 gap-6">
					{filteredBooks.length === 0 && (
						<div className="text-center text-gray-400 py-12">No books found.</div>
					)}
					{filteredBooks.map(book => (
						<div
							key={book.id}
							className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-start md:items-center gap-4 cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
							onClick={() => setSelectedBook(book)}
						>
							<div className="flex-1 flex items-start gap-4">
								<div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center bg-linear-to-br from-indigo-500 to-sky-400 text-white shadow">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20l9-5-9-5-9 5 9 5zM12 12l9-5-9-5-9 5 9 5z" /></svg>
								</div>
								<div>
									<div className="text-lg font-semibold text-slate-800">{book.title}</div>
									<div className="text-sm text-slate-500">By <span className="text-indigo-600 font-medium">{book.author}</span></div>
									<div className="text-gray-500 text-sm mt-2 line-clamp-2">{book.description}</div>
								</div>
							</div>
							<button
								className="bg-linear-to-r from-indigo-600 to-sky-500 text-white px-5 py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-sky-600"
								onClick={e => { e.stopPropagation(); setSelectedBook(book); }}
							>
								View
							</button>
						</div>
					))}
				</div>

				{/* Book Detail Modal */}
				{selectedBook && (
					<div
						className={`${modalClosing ? "overlay-exit" : "overlay-enter"} fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4`}
						onClick={() => {
							// start closing animation when clicking backdrop
							if (!modalClosing) {
								setModalClosing(true);
								setTimeout(() => {
									setSelectedBook(null);
									setModalClosing(false);
								}, 220);
							}
						}}
					>
						<div
							className={`${modalClosing ? "modal-exit" : "modal-enter"} bg-white/95 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative border border-white/60 transform transition duration-200 ease-out`}
							onClick={(e) => e.stopPropagation()}
						>
							<div className="p-6 border-b flex justify-between items-center">
								<h2 className="text-2xl font-bold text-slate-800">{selectedBook.title}</h2>
								<button
									className="bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md w-9 h-9 flex items-center justify-center transition"
									onClick={() => {
									if (!modalClosing) {
										setModalClosing(true);
										setTimeout(() => {
											setSelectedBook(null);
											setModalClosing(false);
										}, 220);
									}
								}}
								>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
								</button>
							</div>
							<div className="p-6">
								<div className="mb-2 text-gray-600 font-semibold">By <span className="text-indigo-600">{selectedBook.author}</span></div>
								<div className="mb-4 text-gray-700">{selectedBook.description}</div>
								<div className="flex items-center gap-4 mt-6 relative">
									<button
										className="bg-linear-to-r from-green-500 to-emerald-400 text-white px-5 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-500 relative"
										onClick={() => handleShare(selectedBook.url)}
									>
										{copied ? "Copied!" : "Share"}
									</button>
									{copied && (
										<span className="absolute -top-8 left-0 bg-slate-900 text-white text-xs px-2 py-1 rounded-md shadow">Link copied</span>
									)}
									<a
										href={selectedBook.downloadUrl}
										download
										className="bg-linear-to-r from-indigo-600 to-sky-500 text-white px-5 py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-sky-600"
									>
										Download
									</a>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* animations for modal enter/exit */}
				<style jsx>{`
					@keyframes overlayIn { from { opacity: 0 } to { opacity: 1 } }
					@keyframes overlayOut { from { opacity: 1 } to { opacity: 0 } }
					@keyframes modalIn { from { opacity: 0; transform: translateY(10px) scale(.98) } to { opacity: 1; transform: translateY(0) scale(1) } }
					@keyframes modalOut { from { opacity: 1; transform: translateY(0) scale(1) } to { opacity: 0; transform: translateY(8px) scale(.98) } }

					.overlay-enter { animation: overlayIn 220ms ease-out both; }
					.overlay-exit { animation: overlayOut 180ms ease-in both; }
					.modal-enter { animation: modalIn 260ms cubic-bezier(.2,.9,.3,1) both; }
					.modal-exit { animation: modalOut 200ms cubic-bezier(.4,0,.2,1) both; }
				`}</style>
			</div>
		</div>
	);
}
