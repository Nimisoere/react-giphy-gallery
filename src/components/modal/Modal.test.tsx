import { render } from "@testing-library/react";
import Modal from "./Modal";
import { IGif } from "@giphy/js-types";

describe("App", () => {
  beforeAll(() => {
    const mockedGif: IGif = {
      type: "gif",
      id: "QwfFGnT3Le4K6bGVIM",
      url: "https://giphy.com/gifs/studiosoriginals-QwfFGnT3Le4K6bGVIM",
      slug: "studiosoriginals-QwfFGnT3Le4K6bGVIM",
      bitly_gif_url: "https://gph.is/g/Eqz2P5D",
      bitly_url: "https://gph.is/g/Eqz2P5D",
      embed_url: "https://giphy.com/embed/QwfFGnT3Le4K6bGVIM",
      username: "studiosoriginals",
      source: "",
      title: "Weekend Saturday GIF by GIPHY Studios Originals",
      rating: "g",
      content_url: "",
      source_tld: "",
      source_post_url: "",
      is_sticker: false,
      import_datetime: "2021-12-15 00:20:08",
      trending_datetime: "2022-01-08 14:33:05",
      images: {
        original: {
          height: 270,
          width: 480,
          size: "2839144",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy.gif",
          mp4_size: "692819",
          mp4: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy.mp4",
          webp_size: "966900",
          webp: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy.webp",
        },
        downsized: {
          height: 270,
          width: 480,
          size: "1865977",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy-downsized.gif",
        },
        downsized_large: {
          height: 270,
          width: 480,
          size: "2839144",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy.gif",
        },
        downsized_medium: {
          height: 270,
          width: 480,
          size: "2839144",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy.gif",
        },
        downsized_small: {
          height: 144,
          width: 256,
          mp4_size: "133151",
          mp4: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy-downsized-small.mp4",
          url: "",
        },
        downsized_still: {
          height: 270,
          width: 480,
          size: "50621",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy-downsized_s.gif",
        },
        fixed_height: {
          height: 200,
          width: 356,
          size: "1449216",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/200.gif",
          mp4_size: "417030",
          mp4: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/200.mp4",
          webp_size: "742046",
          webp: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/200.webp",
        },
        fixed_height_downsampled: {
          height: 200,
          width: 356,
          size: "205015",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/200_d.gif",
          webp_size: "124780",
          webp: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/200_d.webp",
        },
        fixed_height_small: {
          height: 100,
          width: 178,
          size: "474806",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/100.gif",
          mp4_size: "159929",
          mp4: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/100.mp4",
          webp_size: "290082",
          webp: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/100.webp",
        },
        fixed_height_small_still: {
          height: 100,
          width: 178,
          size: "10839",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/100_s.gif",
        },
        fixed_height_still: {
          height: 200,
          width: 356,
          size: "30787",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/200_s.gif",
        },
        fixed_width: {
          height: 113,
          width: 200,
          size: "524043",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/200w.gif",
          mp4_size: "178142",
          mp4: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/200w.mp4",
          webp_size: "326936",
          webp: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/200w.webp",
        },
        fixed_width_downsampled: {
          height: 113,
          width: 200,
          size: "75283",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/200w_d.gif",
          webp_size: "47472",
          webp: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/200w_d.webp",
        },
        fixed_width_small: {
          height: 57,
          width: 100,
          size: "165403",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/100w.gif",
          mp4_size: "52114",
          mp4: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/100w.mp4",
          webp_size: "122000",
          webp: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/100w.webp",
        },
        fixed_width_small_still: {
          height: 57,
          width: 100,
          size: "4157",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/100w_s.gif",
        },
        fixed_width_still: {
          height: 113,
          width: 200,
          size: "13767",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/200w_s.gif",
        },
        looping: {
          mp4_size: "1963539",
          mp4: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy-loop.mp4",
          width: null,
          height: null,
        },
        original_still: {
          height: 270,
          width: 480,
          size: "64198",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy_s.gif",
        },
        original_mp4: {
          height: 270,
          width: 480,
          mp4_size: "692819",
          mp4: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy.mp4",
        },
        preview: {
          height: 198,
          url: "",
          width: 352,
        },
        preview_gif: {
          height: 74,
          width: 132,
          size: "49078",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy-preview.gif",
        },
        preview_webp: {
          height: 88,
          width: 156,
          size: "34240",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/giphy-preview.webp",
        },
        "480w_still": {
          height: 270,
          width: 480,
          size: "2839144",
          url: "https://media2.giphy.com/media/QwfFGnT3Le4K6bGVIM/480w_s.jpg",
        },
      },
      user: {
        avatar_url:
          "https://media3.giphy.com/avatars/studiosoriginals/YkMcrX3ELQ7C.gif",
        username: "studiosoriginals",
        display_name: "GIPHY Studios Originals",
        instagram_url: "",
        website_url: "https://giphy.com/studios",
        is_verified: true,
        is_public: false,
        about_bio: "",
        facebook: "",
        id: 123,
        instagram: "",
        tumblr_site: "",
        twitter: "",
        user_type: "user",
      },
      analytics_response_payload:
        "e=Z2lmX2lkPVF3ZkZHblQzTGU0SzZiR1ZJTSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NDZkN2MyYjhrMmhwM2s0MHYyZnB0a2dpNGo4eDE4dWJnbWlqZ3RybTZnZGI0OXV6JmN0PWc",
      tags: [],
      is_hidden: false,
      is_indexable: false,
      is_removed: false,
      bottle_data: {},
      is_scheduled: false,
    };
    render(<Modal modalGif={mockedGif} setModalGif={jest.fn()} />);
  });

  it("renders successfully", () => {
    // Check if modal is shown properly
    // Check that the right image is rendered (Check img url agaist mock)
  });

  it("Closes when clicked", () => {
    // Check that modal closes on div click
  });
});
