export const focus = (e: React.FocusEvent<HTMLInputElement>) => {
  e.target.removeAttribute('readOnly');
  const target = e.target
    ?.closest('.inputFiled__block')
    ?.querySelector('.inputFiled__text');

  if (e.type != 'blur') {
    target?.classList.add('focus');
    target?.closest('.inputFiled')?.classList.add('focus');
  } else {
    if (e.target?.value == '') {
      target?.classList.remove('focus');
      target?.classList.add('old');
      target?.closest('.inputFiled')?.classList.remove('focus');
    }
  }
};

export const focusinput = (e: React.MouseEvent<HTMLElement>) => {
  const tartget = e.target as HTMLElement;
  if (!tartget?.closest('.inputFiled__eye')) {
    tartget
      ?.closest('.inputFiled__background')
      ?.querySelector('input')
      ?.focus();
  }
};

export const renderInput = (
  setData: React.Dispatch<React.SetStateAction<string>>,
  data: string,
  name: string
) => {
  const arr = Array.from(document.querySelectorAll('.inputFiled__text'));
  for (const item of arr) {
    const input = item.nextElementSibling as HTMLInputElement;
    if ((item.nextElementSibling as HTMLInputElement)?.value) {
      item?.classList.add('focus');
      if (data == '' && name == input?.name) setData(() => input?.value);
    }
  }
};
