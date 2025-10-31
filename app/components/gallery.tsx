'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface GalleryItem {
  imglink: string
  title?: string
  describe?: string
  link?: string
}

interface GalleryProps {
  items: GalleryItem[]
  isMathPage?: boolean
  itemsPerPage?: number
}

export default function Gallery({ items, isMathPage, itemsPerPage = 3 }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

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
          <div key={startIndex + index} className="gallery-item">
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.imglink}
                  alt={item.title || 'Gallery image'}
                  width={itemsPerPage === 1 ? 933 : 300}
                  height={itemsPerPage === 1 ? 525 : 200}
                  className="gallery-image"
                />
              </a>
            ) : (
              <Image
                src={item.imglink}
                alt={item.title || 'Gallery image'}
                width={itemsPerPage === 1 ? 933 : 300}
                height={itemsPerPage === 1 ? 525 : 200}
                className="gallery-image"
              />
            )}

            {item.title && <h3 className="gallery-title font-[Jodson] ">{item.title}</h3>}
            {item.describe && (
              <p
                className="gallery-describe"
                dangerouslySetInnerHTML={{
                  __html: isMathPage
                    ? item.describe.replace(/^([^,]+),/, '<strong>$1</strong>,')
                    : item.describe,
                }}
              />
            )}



            {item.link && (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                 className="gallery-view text-[16px] text-[#065A4C] font-bold hover:underline"
                 onClick={(e) => e.stopPropagation()}
              >
                [View here]
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="gallery-controls">
        <button
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          disabled={totalPages <= 1}
          className="gallery-btn"
        >
          <Image src={'/prev.svg'} alt="" width={61} height={61}></Image>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          disabled={totalPages <= 1}
          className="gallery-btn"
        >
          <Image src={'/next.svg'} alt="" width={61} height={61}></Image>
        </button>
      </div>

      <style jsx>{`
        .gallery-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          margin: 30px
        }

        .gallery-grid {
          display: flex;
          gap: 50px;
          justify-content: center;
        }

        .gallery-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          max-width: ${itemsPerPage === 1 ? '933px' : '300px'};
        }

        .gallery-image {
          object-fit: cover;
          border-radius: 8px;
          width: 100%;
        }

        .gallery-title {
          margin: 10px 0 5px 0;
          font-size: 40px;
          font-weight: bold;
          text-align: center;
          width: 100%;
        }

        .gallery-describe {
          margin: 0;
          font-size: 16px;
          text-align: left;
          line-height: 1.4;
        }

        .gallery-view {
          font-size: 16px !important;
          text-align: left;
          margin-top: 8px;
        }

        .gallery-controls {
          display: flex;
          gap: 10px;
        }

        .gallery-btn {
          padding: 10px 20px;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .gallery-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
}
