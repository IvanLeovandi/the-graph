import { BigInt } from "@graphprotocol/graph-ts"
import {
  NFTListed,
  NFTSold,
  NFTListingCancelled
} from "../generated/NFTMarketplace/NFTMarketplace"
import { Listing } from "../generated/schema"

export function handleNFTListed(event: NFTListed): void {
  let id = event.params.listingId.toString()
  let listing = new Listing(id)

  listing.listingId = event.params.listingId
  listing.seller = event.params.seller
  listing.nftContract = event.params.nftContract
  listing.tokenId = event.params.tokenId
  listing.price = event.params.price
  listing.isActive = true
  listing.createdAt = event.block.timestamp

  listing.save()
}

export function handleNFTSold(event: NFTSold): void {
  let id = event.params.listingId.toString()
  let listing = Listing.load(id)
  if (listing) {
    listing.isActive = false
    listing.save()
  }
}

export function handleNFTListingCancelled(event: NFTListingCancelled): void {
  let id = event.params.listingId.toString()
  let listing = Listing.load(id)
  if (listing) {
    listing.isActive = false
    listing.price = BigInt.fromI32(0)
    listing.save()
  }
}
