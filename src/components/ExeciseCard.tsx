import { HStack, Heading, Image, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo} from '@expo/vector-icons'

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg='gray.500' alignItems='center' p={2} pr={4} rounded='md'mb={3}>
        <Image
          source={{
            uri: "https://treinomestre.com.br/wp-content/uploads/2017/03/remada-unilateral.jpg.webp",
          }}
          alt="imagem exercício"
          w={16}
          h={16}
          mr={4}
          rounded="md"
          resizeMode='cover'
        />
        <VStack flex={1}>
          <Heading fontSize='lg' color='white'>Remada unilateral</Heading>
          <Text fontSize='sm' color='gray.200' mt={1} numberOfLines={2}>3 series x 12 repetições</Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color='gray.300' />
      </HStack>
    </TouchableOpacity>
  );
}
