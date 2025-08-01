import { useState } from 'react';
import {
	Box,
	IconButton,
	Image,
	HStack,
	Circle,
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

interface ImageCarouselProps {
	images: string[];
	height?: string;
	width?: string;
}

export const ImageCarousel = ({
	images,
	height = '70vh',
	width = '100%'
}: ImageCarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	if (!images || images.length === 0) {
		return null;
	}

	return (
		<Box position="relative" width={width} height={height}>
			<Image
				src={images[currentIndex]}
				alt={`Slide ${currentIndex + 1}`}
				width="100%"
				height="100%"
				objectFit="cover"
				borderRadius="md"
			/>

			{images.length > 1 && (
				<>
					<IconButton
						aria-label="Previous image"
						position="absolute"
						left="10px"
						top="50%"
						transform="translateY(-50%)"
						size="sm"
						onClick={goToPrevious}
						zIndex={2}
						backgroundColor={'unset'}
						color={"gray"}
					>
						<FaChevronLeft />
					</IconButton>

					<IconButton
						aria-label="Next image"
						position="absolute"
						right="10px"
						top="50%"
						transform="translateY(-50%)"
						size="sm"
						onClick={goToNext}
						zIndex={2}
						backgroundColor={'unset'}
						color={'grey'}
					>
						<FaChevronRight />
					</IconButton>

					<HStack
						position="absolute"
						bottom="10px"
						left="50%"
						transform="translateX(-50%)"
						zIndex={2}
					>
						{images.map((_, index) => (
							<Circle
								key={index}
								size="8px"
								bg={index === currentIndex ? 'white' : 'whiteAlpha.500'}
								cursor="pointer"
								onClick={() => goToSlide(index)}
								transition="all 0.2s"
								_hover={{ bg: 'white' }}
							/>
						))}
					</HStack>
				</>
			)}
		</Box>
	);
};
