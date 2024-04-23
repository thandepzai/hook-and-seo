"use server";

export const addNewData = async (prevState, formValue) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(formValue);
        }, 1000);
      });
};
