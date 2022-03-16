import * as S from './modal.styled';
import { DateInput, QuantityCounter } from '../../components';
import { ButtonCross } from '../../ui-kit-styled/button.styled';
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';
import { useCallback, useEffect } from 'react';

const pastDateMessage = "Мы не можем отправить вас в прошлое.";
const availableMessage = "На эти даты есть свободные номера. Пока есть.";
const tooltipText = "Укажите количество детей, которые будут с вами, возраст которых от 6 до 18 лет. Дети до 6 лет размещаются бесплатно."

type ModalProps = {
  onModalClose: () => void;
};

function Modal({ onModalClose }: ModalProps ): JSX.Element | null {

  const onEscKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') {
        onModalClose();
      }
    }, [onModalClose]);

  useEffect(() => {
    document.addEventListener('keydown', onEscKeyDown);
    return () => document.removeEventListener('keydown', onEscKeyDown);
  }, [onEscKeyDown, onModalClose]);

  return (
    <FocusLock>
      <RemoveScroll>
        <S.ModalOverlay onClick={onModalClose} />
        <S.Modal>
          <S.TitleWrapper>
            <S.ModalTitle>Поиск гостиницы в Седоне</S.ModalTitle>
            <ButtonCross
              aria-label="Закрыть форму"
              onClick={onModalClose}
            />
          </S.TitleWrapper>
          <S.ModalForm>
            <DateInput
              inputId="date-start"
              inputName="date-start"
              labelText="Дата заезда"
              message={pastDateMessage}
              isError
            />
            <DateInput
              inputId="date-end"
              inputName="date-end"
              labelText="Дата выезда"
              message={availableMessage}
            />
            <S.QuantityWrapper>
              <QuantityCounter
                inputId="adults"
                inputName="adults"
                inputValue={2}
                labelText="Взрослые:"
              />
              <QuantityCounter
                inputId="children"
                inputName="children"
                inputValue={1}
                labelText="Дети:"
                tooltipText={tooltipText}
              />
            </S.QuantityWrapper>
            <S.ModalSubmit as="input" value="Найти" />
          </S.ModalForm>
        </S.Modal>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Modal;
