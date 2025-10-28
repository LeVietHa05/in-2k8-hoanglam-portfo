'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryItem {
    imglink: string
    title?: string
    describe?: string
    link?: string
}

interface GalleryProps {
    items: GalleryItem[]
}

export default function Gallery({ items }: GalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerPage = 3

    const totalPages = Math.ceil(items.length / itemsPerPage)

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages)
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
    }

    const startIndex = currentIndex * itemsPerPage
    const visibleItems = items.slice(startIndex, startIndex + itemsPerPage)

    return (
        <div className="gallery-container">
            <div className="gallery-grid">
                {visibleItems.map((item, index) => (
                    <div key={startIndex + index} className="gallery-item flex-1">
                        {item.link ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={item.imglink}
                                    alt={item.title || 'Gallery image'}
                                    width={300}
                                    height={200}
                                    className="gallery-image"
                                />
                            </a>
                        ) : (
                            <Image
                                src={item.imglink}
                                alt={item.title || 'Gallery image'}
                                width={300}
                                height={200}
                                className="gallery-image"
                            />
                        )}
                        {item.title && <h3 className="gallery-title font-[Jodson] ">{item.title}</h3>}
                        {item.describe && <p className="gallery-describe">{item.describe}</p>}
                    </div>
                ))}
            </div>
            <div className="gallery-controls">
                <button onClick={(e) => { e.stopPropagation(); prev(); }} disabled={totalPages <= 1} className="gallery-btn">
                    <Image src={'/prev.svg'} alt='' width={61} height={61}></Image>
                </button>
                <button onClick={(e) => { e.stopPropagation(); next(); }} disabled={totalPages <= 1} className="gallery-btn">
                    <Image src={'/next.svg'} alt='' width={61} height={61}></Image>
                </button>
            </div>
            <style jsx>{`
        .gallery-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .gallery-grid {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        .gallery-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .gallery-image {
          object-fit: cover;
          border-radius: 8px;
        }
        .gallery-title {
          margin: 10px 0 5px 0;
          font-size: 40px;
          font-weight: bold;
        }
        .gallery-describe {
          margin: 0;
          font-size: 16px;
        }
        .gallery-controls {
          display: flex;
          gap: 10px;
        }
        .gallery-btn {
          padding: 10px 20px;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .gallery-btn:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
        </div>
    )
}
