import React from 'react';

interface Props {
  size: number
}

const BottleIcon = (props: Props) => {
  const { size } = props;
  return (

    <svg width={size} height={size} viewBox="0 0 217 223" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_5_47)">
        <path opacity="0.984" fillRule="evenodd" clipRule="evenodd" d="M173.912 16.1712C173.063 16.3989 172.179 16.5088 171.259 16.5003C167.948 19.833 164.761 23.2797 161.696 26.8398C161.071 26.2816 160.446 25.7238 159.82 25.1657C159.418 24.8644 159.217 24.4604 159.217 23.9534C161.98 20.3529 164.993 16.9757 168.257 13.8218C169.059 13.3013 169.887 13.2542 170.742 13.6803C171.902 14.3796 172.958 15.21 173.912 16.1712Z" fill="#6D4238" />
        <path fillRule="evenodd" clipRule="evenodd" d="M173.912 16.1712C174.787 16.9524 175.663 17.7338 176.538 18.515C175.928 18.7295 175.28 18.8258 174.596 18.8036C171.174 22.2614 167.875 25.8332 164.698 29.5183C163.698 28.6254 162.697 27.7327 161.696 26.8398C164.761 23.2797 167.948 19.833 171.259 16.5003C172.179 16.5088 173.063 16.3989 173.912 16.1712Z" fill="#6D4238" fillOpacity="0.8" />
        <path fillRule="evenodd" clipRule="evenodd" d="M176.538 18.5149C179.791 21.4168 183.042 24.3184 186.295 27.2203C186.151 27.8513 186.129 28.5054 186.228 29.183C183.181 32.9756 180.007 36.6586 176.706 40.2325C172.829 36.7728 168.951 33.3128 165.074 29.8531C164.949 29.7416 164.823 29.6298 164.698 29.5183C167.875 25.8332 171.174 22.2614 174.596 18.8036C175.28 18.8258 175.928 18.7294 176.538 18.5149Z" fill="#6D4238" />
        <path fillRule="evenodd" clipRule="evenodd" d="M186.295 27.2203C187.17 28.0014 188.046 28.7829 188.921 29.564C189.265 30.4208 189.256 31.3116 188.896 32.2369C185.96 35.9043 182.897 39.4622 179.708 42.9111C178.707 42.0182 177.707 41.1255 176.706 40.2326C180.007 36.6586 183.181 32.9757 186.228 29.1831C186.129 28.5054 186.151 27.8513 186.295 27.2203Z" fill="#6D4238" fillOpacity="0.8" />
        <path fillRule="evenodd" clipRule="evenodd" d="M188.921 29.564C189.985 30.4021 190.93 31.3576 191.756 32.4302C192.276 33.2315 192.324 34.0601 191.897 34.9154C189.134 38.5159 186.121 41.8931 182.857 45.047C182.354 45.1047 181.929 44.9509 181.584 44.5852C180.959 44.0271 180.334 43.4692 179.708 42.9111C182.897 39.4622 185.96 35.9043 188.895 32.2368C189.256 31.3115 189.265 30.4208 188.921 29.564Z" fill="#6D4238" />
        <path fillRule="evenodd" clipRule="evenodd" d="M165.074 29.8531C168.951 33.3128 172.829 36.7729 176.706 40.2325C177.707 41.1255 178.707 42.0181 179.708 42.9111C180.334 43.4692 180.959 44.0271 181.584 44.5852C180.915 45.3357 180.245 46.0862 179.575 46.8367C174.072 41.9259 168.568 37.0154 163.065 32.1046C163.734 31.3541 164.404 30.6036 165.074 29.8531Z" fill="#9DDCEB" />
        <path opacity="0.983" fillRule="evenodd" clipRule="evenodd" d="M154.342 29.0394C155.354 29.7356 156.118 30.6418 156.634 31.7584C155.415 32.2432 154.196 32.7284 152.977 33.2132C136.75 34.1836 123.046 40.6033 111.865 52.4724C109.864 50.6868 107.863 48.9009 105.861 47.1153C111.731 40.5173 118.888 35.8951 127.333 33.2484C134.924 30.9634 142.708 30.0455 150.685 30.4942C152.02 30.2859 153.239 29.801 154.342 29.0394Z" fill="#A3DFEE" />
        <path fillRule="evenodd" clipRule="evenodd" d="M159.82 25.1657C160.446 25.7238 161.071 26.2816 161.696 26.8398C162.697 27.7327 163.698 28.6254 164.698 29.5183C164.823 29.6298 164.949 29.7416 165.074 29.8531C164.404 30.6036 163.734 31.3541 163.065 32.1046C168.568 37.0154 174.072 41.9259 179.575 46.8367C181.429 48.2095 181.323 49.4622 179.255 50.5948C178.925 50.6752 178.626 50.6329 178.357 50.4678C177.482 49.6867 176.606 48.9052 175.731 48.1241C174.73 47.2311 173.73 46.3385 172.729 45.4456C168.491 41.4475 164.064 37.7222 159.448 34.2695C154.195 36.6018 148.859 38.8053 143.44 40.8798C134.29 45.4773 126.266 51.5738 119.37 59.1688C116.869 56.9366 114.367 54.7046 111.865 52.4724C123.046 40.6033 136.75 34.1836 152.977 33.2132C154.196 32.7284 155.415 32.2432 156.634 31.7584C156.118 30.6418 155.354 29.7356 154.342 29.0394C154.119 27.8227 154.601 26.9048 155.788 26.2857C156.591 26.4094 157.266 26.7866 157.811 27.4171C158.481 26.6666 159.151 25.9162 159.82 25.1657Z" fill="#BEE8F2" />
        <path fillRule="evenodd" clipRule="evenodd" d="M172.729 45.4455C171.912 47.0211 171.234 48.6623 170.694 50.3699C168.269 64.8535 162.169 77.6081 152.392 88.6329C141.385 78.8117 130.377 68.9901 119.37 59.1688C126.266 51.5738 134.29 45.4772 143.44 40.8798C148.859 38.8053 154.195 36.6018 159.448 34.2695C164.064 37.7221 168.491 41.4475 172.729 45.4455Z" fill="#A3DFEE" />
        <path fillRule="evenodd" clipRule="evenodd" d="M172.729 45.4455C173.73 46.3385 174.73 47.2311 175.731 48.1241C175.001 49.6683 174.56 51.2963 174.406 53.008C175.119 68.9853 170.283 83.0923 159.897 95.3293C157.395 93.0971 154.894 90.8652 152.392 88.6329C162.169 77.6081 168.269 64.8535 170.694 50.3699C171.234 48.6623 171.912 47.0211 172.729 45.4455Z" fill="#94D9EA" />
        <path fillRule="evenodd" clipRule="evenodd" d="M175.731 48.1241C176.606 48.9053 177.482 49.6867 178.357 50.4679C177.726 51.65 177.383 52.9163 177.327 54.2664C179.938 68.9225 177.518 82.7139 170.066 95.6409C168.806 97.4294 167.418 99.1112 165.901 100.686C163.899 98.9009 161.898 97.1149 159.897 95.3293C170.283 83.0923 175.119 68.9853 174.406 53.008C174.56 51.2963 175.001 49.6683 175.731 48.1241Z" fill="#89CEDC" />
        <path fillRule="evenodd" clipRule="evenodd" d="M105.861 47.1153C107.863 48.9009 109.864 50.6868 111.865 52.4724C94.0085 72.4853 76.1512 92.4986 58.2943 112.512C56.2931 110.726 54.2915 108.94 52.2903 107.154C70.1473 87.1415 88.0046 67.1282 105.861 47.1153Z" fill="#6D4238" />
        <path fillRule="evenodd" clipRule="evenodd" d="M111.865 52.4724C114.367 54.7046 116.869 56.9365 119.37 59.1688C101.513 79.1817 83.6561 99.195 65.7992 119.208C63.2974 116.976 60.796 114.744 58.2943 112.512C76.1512 92.4986 94.0085 72.4853 111.865 52.4724Z" fill="#6D4238" fillOpacity="0.8" />
        <path fillRule="evenodd" clipRule="evenodd" d="M119.37 59.1688C130.377 68.9901 141.385 78.8117 152.392 88.6329C134.535 108.646 116.678 128.659 98.8207 148.672C87.8136 138.851 76.8062 129.029 65.7991 119.208C83.6561 99.195 101.513 79.1817 119.37 59.1688Z" fill="#6D4238" />
        <path fillRule="evenodd" clipRule="evenodd" d="M152.392 88.6329C154.894 90.8652 157.395 93.0971 159.897 95.3293C142.04 115.342 124.182 135.356 106.326 155.368C103.824 153.136 101.322 150.904 98.8206 148.672C116.678 128.659 134.535 108.646 152.392 88.6329Z" fill="#6D4238" fillOpacity="0.8" />
        <path fillRule="evenodd" clipRule="evenodd" d="M159.897 95.3293C161.898 97.1149 163.899 98.9008 165.901 100.686C148.51 121.181 130.653 141.194 112.329 160.726C110.328 158.94 108.327 157.154 106.326 155.368C124.182 135.356 142.04 115.342 159.897 95.3293Z" fill="#6D4238" />
        <path opacity="0.992" fillRule="evenodd" clipRule="evenodd" d="M52.2903 107.154C54.2915 108.94 56.2931 110.726 58.2943 112.511C53.8834 116.267 51.0627 120.939 49.8315 126.528C47.7414 127.279 45.7139 128.166 43.7498 129.19C34.1246 139.473 24.7496 149.98 15.625 160.71C13.4515 165.364 14.2165 169.416 17.9199 172.868C13.2937 170.351 10.1685 166.551 8.54454 161.469C8.20198 159.638 8.3377 157.849 8.95142 156.104C18.2994 145.123 27.8973 134.366 37.7459 123.833C39.694 122.476 41.8464 121.701 44.2028 121.506C44.2877 119.187 44.8142 116.961 45.7816 114.827C47.8232 112.161 49.9931 109.604 52.2903 107.154Z" fill="#A3DFEE" />
        <path fillRule="evenodd" clipRule="evenodd" d="M58.2943 112.512C60.796 114.744 63.2974 116.976 65.7992 119.208C61.7977 123.041 58.7267 127.489 56.5859 132.555C54.8425 133.402 53.1775 134.387 51.5895 135.511C41.741 146.045 32.143 156.801 22.795 167.782C21.7059 169.797 21.0544 171.912 20.841 174.126C19.7549 173.986 18.7814 173.566 17.9199 172.868C14.2165 169.416 13.4515 165.364 15.625 160.71C24.7496 149.98 34.1246 139.473 43.7498 129.19C45.7139 128.166 47.7414 127.279 49.8315 126.528C51.0627 120.939 53.8834 116.267 58.2943 112.512Z" fill="#BCE7F1" />
        <path opacity="0.998" fillRule="evenodd" clipRule="evenodd" d="M65.7991 119.208C76.8062 129.029 87.8136 138.851 98.8207 148.672C95.4735 153.075 91.4018 156.632 86.6054 159.341C85.8133 161.462 84.8001 163.478 83.5661 165.391C74.4415 176.121 65.0665 186.628 55.4413 196.911C53.5626 198.222 51.5355 199.109 49.3596 199.573C48.8069 197.202 48.373 194.793 48.0577 192.345C39.2824 193.014 33.0174 189.334 29.2638 181.305C28.899 179.07 28.5345 176.834 28.1697 174.6C25.7015 174.564 23.2587 174.406 20.841 174.126C21.0544 171.912 21.7059 169.797 22.795 167.782C32.143 156.801 41.741 146.045 51.5895 135.511C53.1775 134.387 54.8425 133.402 56.5859 132.555C58.7267 127.489 61.7977 123.041 65.7991 119.208Z" fill="#A3DFEE" />
        <path fillRule="evenodd" clipRule="evenodd" d="M98.8207 148.672C101.322 150.904 103.824 153.136 106.326 155.368C104.264 157.804 102.082 160.125 99.7764 162.331C97.8797 163.877 95.7408 164.889 93.3599 165.367C93.1407 167.606 92.4893 169.72 91.4059 171.712C82.1697 182.567 72.6829 193.199 62.9462 203.608C59.5475 205.641 56.0598 205.899 52.4828 204.381C50.9917 203.058 49.9505 201.455 49.3596 199.573C51.5355 199.109 53.5626 198.222 55.4413 196.911C65.0665 186.628 74.4415 176.121 83.5661 165.391C84.8001 163.478 85.8133 161.462 86.6054 159.341C91.4018 156.632 95.4735 153.075 98.8207 148.672Z" fill="#94DAEA" />
        <path fillRule="evenodd" clipRule="evenodd" d="M106.326 155.368C108.327 157.154 110.328 158.94 112.329 160.726C110.157 163.286 107.862 165.732 105.445 168.063C103.435 169.266 101.283 170.042 98.9885 170.39C98.9036 172.709 98.3771 174.935 97.4098 177.069C88.0618 188.049 78.4639 198.806 68.6153 209.34C64.8073 210.834 61.1118 210.57 57.5284 208.546C55.7399 207.287 54.0581 205.899 52.4829 204.381C56.0598 205.899 59.5475 205.641 62.9462 203.608C72.6829 193.199 82.1697 182.567 91.4059 171.712C92.4893 169.72 93.1407 167.606 93.3599 165.367C95.7408 164.889 97.8797 163.877 99.7764 162.331C102.082 160.125 104.264 157.804 106.326 155.368Z" fill="#88CEDC" />
      </g>
      <defs>
        <clipPath id="clip0_5_47">
          <rect width="257.487" height="257.487" fill="white" transform="translate(97.4277 -76) rotate(41.7416)" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default BottleIcon;
